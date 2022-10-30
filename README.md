# Overview

Contains an ecommerce application using django and react

## Tutorial reference

Based on the following tutorial:
* udemy.com, Python with React | An Ecommerce Website by Dennis Ivy and Brad Traversy

## Using VSCode to debug

See https://code.visualstudio.com/docs/python/tutorial-django for more details.

If you have opened the "django-learning" repo
as your workspace folder in VSCode, then this is the configuration
you will want:

        {
            "name": "Python: Django",
            "type": "python",
            "request": "launch",
            "program": "${workspaceFolder}/jobapp/manage.py",
            "args": [
                "runserver",
            ],
            "django": true
        },