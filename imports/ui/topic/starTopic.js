import './starTopic.html'
import { Topics } from '../../api/topics.js';
Template.starTopic.rendered = function () {
  this.$('.rateit').rateit();
}

Template.starTopic.helpers({
  getLikesByUser: function (topicId) {
    return Topics.getLikesByUserId(topicId, Meteor.userId());
  }
});

Template.starTopic.events({
  'click .rateit': function (event, template) {
    event.currentTarget.disable = true;
    Meteor.call('topics.setLiker', this._id, $("#rateit_" + this._id._str).rateit("value"));
    event.currentTarget.disable = false;
  }
});
