from flask import Flask, render_template, url_for
app = Flask(__name__)


@app.route("/")
@app.route("/home")
def home():
    return render_template("layout_template.html")


@app.route("/about-us")
@app.route("/about")
def about_us():
    return render_template("/pages/about_us.html")


@app.route("/our-mission")
def our_mission():
    return render_template("/pages/our_mission.html")


@app.route("/gallery")
def gallery():
    return render_template("/pages/gallery.html")


@app.route("/contact-us")
@app.route("/contact")
def contact_us():
    return render_template("/pages/contact_us.html")


if __name__ == '__main__':
    app.run(debug=True)
