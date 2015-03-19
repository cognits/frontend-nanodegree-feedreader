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
         it('have URLs defined and not empty', function(){
            for(var i in allFeeds){
                expect(allFeeds[i].url).toBeDefined;
                expect(allFeeds[i].url.length).not.toBe(0);
            }
         });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('has name defined and not empty', function(){
            for(var i in allFeeds){
                expect(allFeeds[i].name).toBeDefined;
                expect(allFeeds[i].name.length).not.toBe(0);
            }
         });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function(){
            var MenuIcon = $('.menu-icon-link');
            var body = $('body');
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('is hidden by default', function(){

            expect(body.hasClass('menu-hidden')).toBeTruthy();

         });
         
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('changes visibility when menu icon is clicked', function(){
          /* .trigger() Any event handlers attached with .on() or one of its 
            shortcut methods are triggered when the corresponding event occurs.
             They can be fired manually, however, with the .trigger() method. A call
              to .trigger() executes the handlers in the same order they would be if 
              the event were triggered naturally by the user:*/

            MenuIcon.trigger('click');
            expect(body.hasClass('menu-hidden')).toBeFalsy();

            MenuIcon.trigger('click');
            expect(body.hasClass('menu-hidden')).toBeTruthy();
         /*The .hasClass() method will return true if the class is assigned to an element,
             even if other classes also are. 
            For example, given the HTML above,
             the following will return true: */

          });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
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

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
                /*Given a jQuery object that represents a set of DOM elements,
         the .find() method allows us to search through the descendants of 
         these elements in the DOM tree and construct a new jQuery object 
         from the matching elements. The .find() and .children() methods are 
         similar, except that the latter only travels a single level down the
          DOM tree.

The first signature for the .find()method accepts a selector 
expression of the same type that we can pass to the $() function. 
The elements will be filtered by testing whether they match this selector.
*/
        var feedTexts = $('.feed').find('h2').text();

         beforeEach(function(done){
            feedTexts;
            loadFeed(1, done);
         })

         it('ensures that a new feed is loaded', function(done){
            expect($('.feed').find('h2').text()).not.toBe(feedTexts);
            done();
         });

         afterEach(function(done){
            loadFeed(0, done);
         });
    });
}());