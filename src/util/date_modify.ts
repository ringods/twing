import TwingEnvironment from "../environment";
import {DateTime, Interval as DateTimeInterval} from 'luxon';

import ensureDate from "../util/ensure-date-time";

/**
 * Returns a new date object modified.
 *
 * <pre>
 *   {{ post.published_at|date_modify("-1day")|date("m/d/Y") }}
 * </pre>
 *
 * @param {TwingEnvironment} env
 * @param {DateTime|DateTimeInterval|string} date A date
 * @param {string} modifier A modifier string
 *
 * @returns {DateTime} A new date object
 */
export default function twingDateModify(env: TwingEnvironment, date: Date | DateTime | DateTimeInterval | string, modifier: string = null) {
    let dateTime: DateTime = ensureDate(env, date) as DateTime;

    let regExp = new RegExp(/(\+|-)([0-9])(.*)/);
    let parts = regExp.exec(modifier);

    let operator: string = parts[1];
    let operand: number = Number.parseInt(parts[2]);
    let unit: string = parts[3].trim();

    let duration: any = {};

    duration[unit] = operator === '-' ? -operand : operand;

    dateTime = dateTime.plus(duration);

    return dateTime;
}