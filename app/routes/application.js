import Ember from 'ember';

const {
  Route,
  inject: { service }
} = Ember;

export default Ember.Route.extend({
  splashscreenService: service('device/splashscreen'),

  afterModel() {
    alert('afterModel');
    let sss = this.get('splashScreenService');
    if( sss ) {
      sss.hide();
    }
  }
});
