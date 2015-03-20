/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
	/* This is our first test suite - a test suite just contains
	* a related set of tests. This suite is all about the RSS
	* feeds definitions, the allFeeds variable in our application.
	*/

/*************************************************************************/
	describe('RSS Feeds', function() {
		/* This is our first test - it tests to make sure that the
		 * allFeeds variable has been defined and that it is not
		 * empty. Experiment with this before you get started on
		 * the rest of this project. What happens when you change
		 * allFeeds in app.js to be an empty array and refresh the
		 * page?
		 */
		it('are defined', function() {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});

/*************************************************************************/
/*****************TEST URL DEFINIDO Y NO VACIO****************************/
		/* TODO: Write a test that loops through each feed
		 * in the allFeeds object and ensures it has a URL defined
		 * and that the URL is not empty.
		 */
		it('url not_null', function() {
			expect(allFeeds[0].url).toBeDefined();
			expect(allFeeds[0].url.length).not.toBe(0);
		});
		it('url not_null', function() {
			expect(allFeeds[1].url).toBeDefined();
			expect(allFeeds[1].url.length).not.toBe(0);
		});
		it('url not_null', function() {
			expect(allFeeds[2].url).toBeDefined();
				expect(allFeeds[2].url.length).not.toBe(0);
		});
		it('url not_null', function() {
			expect(allFeeds[3].url).toBeDefined();
			expect(allFeeds[3].url.length).not.toBe(0);
		});

/*************************************************************************/
/******************TEST NAME DEFINIDO Y NO VACIO**************************/
		/* TODO: Write a test that loops through each feed
		 * in the allFeeds object and ensures it has a name defined
		 * and that the name is not empty.
		 */
		it('url not_null', function() {
			expect(allFeeds[0].name).toBeDefined();
			expect(allFeeds[0].name.length).not.toBe(0);
		});
		it('url not_null', function() {
			expect(allFeeds[1].name).toBeDefined();
			expect(allFeeds[1].name.length).not.toBe(0);
		});
		it('url not_null', function() {
			expect(allFeeds[2].name).toBeDefined();
			expect(allFeeds[2].name.length).not.toBe(0);
		});
		it('url not_null', function() {
			expect(allFeeds[3].name).toBeDefined();
			expect(allFeeds[3].name.length).not.toBe(0);
		});
	});

/*************************************************************************/
/***********************test menu hidden**********************************/
		/* TODO: Write a new test suite named "The menu" */
		/* TODO: Write a test that ensures the menu element is
		 * hidden by default. You'll have to analyze the HTML and
		 * the CSS to determine how we're performing the
		 * hiding/showing of the menu element.
		 */
		describe('The menu',function(){
		var body=$('body');
		var dato=$('.menu-icon-link');

		it('is hidden by default',function(){

			expect(body.hasClass('menu-hidden')).toBeTruthy();

		});
/*************************************************************************/
/*********************test menu icon click********************************/
		 /* TODO: Write a test that ensures the menu changes
		  * visibility when the menu icon is clicked. This test
		  * should have two expectations: does the menu display when
		  * clicked and does it hide when clicked again.
		  */
		it('changes visibility when menu icon is clicked', function(){
			dato.trigger('click');
			expect(body.hasClass('menu-hidden')).toBeFalsy();

			dato.trigger('click');
			expect(body.hasClass('menu-hidden')).toBeTruthy();
		});
	});
/*************************************************************************/
/*************************initial entries********************************/
	/* TODO: Write a new test suite named "Initial Entries" */
		describe('Initial Entries',function(done){
			var feed=$('.feed').children();

			beforeEach(function(done){
				loadFeed(0,done);
			});
		/* TODO: Write a test that ensures when the loadFeed
		 * function is called and completes its work, there is at least
		 * a single .entry element within the .feed container.
		 * Remember, loadFeed() is asynchronous so this test wil require
		 * the use of Jasmine's beforeEach and asynchronous done() function.
		 */
		it('ensures when the loadfeed function is called',function(done){
			expect(feed).toBeDefined();
			expect(feed).not.toBe(0);
			done();
		});

	});
/*************************************************************************/
/********************New Feed Selection***********************************/
	/* TODO: Write a new test suite named "New Feed Selection"*/
		describe('new feed selection',function(){
			var feedSelection=$('.feed').find('h2').text();
			beforeEach(function(done){
				feedSelection;
				loadFeed(1,done);
			});


		/* TODO: Write a test that ensures when a new feed is loaded
		 * by the loadFeed function that the content actually changes.
		 * Remember, loadFeed() is asynchronous.
		 */
			it('ensures when a new feed is loadded',function(done){
				expect($('.feed').find('h2').text()).not.toBe(feedSelection);
				done();
			});
			afterEach(function(done){
				loadFeed(0,done);
			});
		});
/*************************************************************************/
}());
