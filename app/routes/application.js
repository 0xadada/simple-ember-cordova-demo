import Ember from 'ember';

const {
  inject: { service }
} = Ember;

export default Ember.Route.extend({
  splashscreenService: service('device/splashscreen'),

  afterModel() {
    let sss = this.get('splashScreenService');
    if( sss ) {
      sss.hide();
    }
  }
});
