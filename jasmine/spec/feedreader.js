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

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         
         it ('url is defined and not empty', function(){
            for (var iteration in allFeeds)
                expect(allFeeds[iteration].url).toBeDefined();
                expect(allFeeds[iteration].url.length).not.toBe(0);
         });



        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it ('name is defined and not empty', function(){
            for(var iteration2 in allFeeds)
                expect(allFeeds[iteration2].name).toBeDefined();
                expect(allFeeds[iteration2].name.length).not.toBe(0);
         });

    });


    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
    describe('Hidden, Showing Menu', function(){
        var icon_menu = $('.menu-icon-link');
        var body = $('body');

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('Hidden is correct ', function(){
            expect(body.hasClass('menu-hidden')).toBeTruthy();
        });

         it('changes visibility when menu icon is clicked', function(){
             icon_menu.trigger('click');
            expect(body.hasClass('menu-hidden')).toBeFalsy();
            
            icon_menu.trigger('click');
            expect(body.hasClass('menu-hidden')).toBeTruthy();
        });
    });
    
            /* TODO: Write a test that ensures when the loadFeed
            * function is called and completes its work, there is at least
            * a single .entry element within the .feed container.
            * Remember, loadFeed() is asynchronous so this test wil require
            * the use of Jasmine's beforeEach and asynchronous done() function.
            */
    describe('Initial Entries', function(){
            /*Calls to beforeEach, it, and afterEach can take an optional single argument
            that should be called when the async work is complete.*/
            beforeEach(function(done){
                loadFeed(0, done);
            });
            it('contain at least a single .entry element within the .feed container', function(done){
                var feedContainer = $('.feed').children();
                expect(feedContainer).toBeDefined();
                expect(feedContainer).not.toBe(0);
                expect(feedContainer.length).toBeGreaterThan(0);
                done();
            });
    });


        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection"*/
        describe('New Feed Selection', function(){



        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

            var feedTxt = $('.feed').find('h2').text();beforeEach(function(done){
                feedTxt;
                loadFeed(1, done);
                })
            it('New feed is loading correctly', function(done){
                expect($('.feed').find('h2').text()).not.toBe(feedTxt);
                done();
            });
            afterEach(function(done){
                loadFeed(0, done);
            });
        });
}());




