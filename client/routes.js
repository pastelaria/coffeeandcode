var OnBeforeActions = {
    loginRequired: function(pause) {
      if (!Meteor.userId()) {
        this.render('home');
      } else {
      	this.next();
      }
    }
};

Router.onBeforeAction(OnBeforeActions.loginRequired, {
	only : ['eventForm']
});

Router.route('/', {
  name: 'home',
  template: 'home'
});

Router.route('/eventForm', {
  name: 'eventForm',
  template: 'eventForm'
});

Router.route('/topicForm', {
  name: 'topicForm',
  template: 'topicForm'
});

Router.route('/banner', {
  name: 'banner',
  template: 'banner'
});

Router.route('/about', {
  name: 'about',
  template: 'about'
});

Router.configure({
    layoutTemplate: 'main'
});