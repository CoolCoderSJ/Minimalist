import flask
from flask import Flask, request, flash, render_template, redirect, render_template_string, make_response
import os

app = Flask(__name__)
themes = ['nord', 'style.css', 'purple-night', 'light']

@app.route("/")
def index():
    return redirect("/docs/2/home")
    return render_template("index.html")

@app.route("/docs/<docnum>/<template>", defaults={"theme": "purple-night"})
@app.route("/docs/<docnum>/<theme>/<template>")
def template(docnum, theme, template):
    print(docnum, theme, template)
    if docnum != "1" and docnum != "2":
        return render_template("404.html")
    if theme == "dark":
        theme = "style.css"
    if theme not in themes:
        return render_template("404.html")

    if not os.path.exists(f"templates/{docnum}/{template}.html"):
        return render_template("404.html")

    return render_template(f"{docnum}/{template}.html", theme=theme)

@app.route("/style.css")
def stylesheetdark():
    r = make_response(open("static/Minimalist.css", "rb").read())
    r.headers.set("Content-Type", "text/css")
    return r

@app.route("/purple-night")
def stylesheetpurple():
    r = make_response(open("static/purple-night.css", "rb").read())
    r.headers.set("Content-Type", "text/css")
    return r

@app.route("/light")
def stylesheetlight():
    r = make_response(open("static/light.css", "rb").read())
    r.headers.set("Content-Type", "text/css")
    return r

@app.route("/nord")
def stylesheetnord():
    r = make_response(open("static/nord.css", "rb").read())
    r.headers.set("Content-Type", "text/css")
    return r

@app.route("/mjs")
def stylesheetmjs():
    r = make_response(open("static/Minimalist.js", "rb").read())
    r.headers.set("Content-Type", "application/javascript")
    return r

app.run(host="0.0.0.0", port=8080)