from flask import Flask, render_template, url_for
app = Flask(__name__)


@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html', title="Home")


@app.route("/about")
def about_us():
    return render_template('about_us.html', title="About Us")


@app.route("/our-mission")
def our_mission():
    return render_template('our_mission.html', title="Our Mission")


@app.route("/gallery")
def gallery():
    return render_template('gallery.html', title="Gallery")


@app.route("/contact")
def contact_us():
    return render_template('contact_us.html', title="Contact Us")


if __name__ == '__main__':
    app.run(debug=True)

# 12345
