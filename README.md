octopress-shaarli
=================

Add links feed from Shaarli instance (like http://my.shaarli.fr) to your Octopress blog asides.
It's based on RSS feed and use http://rsstojson.herokuapp.com to convert it in JSON.

Code is based on Github.js plugin

Demo:
-----

http://ahmet2mir.github.io parse https://my.shaarli.fr/ahmet2mir/


Installation:
-------------

Simply copy shaarli.js, shaarli.html and configure _config.yml

	git clone https://github.com/ahmet2mir/octopress-shaarli.git
	cd octopress-shaarli
	export BLOG_PATH="/path/to/your/blog"
	cp shaarli.html $BLOG_PATH/sources/_includes/custom/asides/
	cp shaarli.js $BLOG_PATH/sources/javascripts/

Edit $BLOG_PATH/_config.yml

	# Add custom/asides/shaarli.html
	default_asides: [asides/recent_posts.html,custom/asides/shaarli.html]

	# Add your Shaarli RSS feed
	shaarli_url: "http://my.shaarli.fr/ahmet2mir/?do=rss"
	# title aside
	shaarli_title: Shaarli
	# number of link
	shaarli_count: 5

Generate

	rake generate
	rake preview

Open http://0.0.0.0:4000 and enjoy

Now you can publish :)

