Functions
=========

<ul>
    {% for item in site.data.navigation_reference.sections.functions.items %}
        <li>
        {% if item[1].url %}
            <a href="{{ site.baseurl }}/{{ item[1].url }}" alt="{{ item[1].title }}">{{ item[1].title }}</a>
        {% else %}
            <span>{{ item[1].title }}</span>
        {% endif %}
        </li>
    {% endfor %}
</ul>

[back]({{ site.baseurl }}{% link index.md %})