// app/controllers/login.js
import Ember from 'ember';

export default Ember.Controller.extend({
  login_progress: '',
  login_error: '',

  actions: {
    authenticate: function() {
      this.set('login_progress', 'in_progress');
      this.set('login_error', '');
      var credentials = this.getProperties('identification', 'password'),
        authenticator = 'simple-auth-authenticator:jwt';

      this.get('session').authenticate(authenticator, credentials)
        .catch((reason) => {
        console.warn('authentication failed: ' + ' ' + reason.error + ' ' +reason.msg + ' ' + reason);
      this.set('login_progress', '');
      if (reason.error === 'authn_user_pass_fail') {
        this.set('login_error', 'username and password not valid, please try again');
      }
      else {
        this.set('login_error', 'could not contact server - if this persists please contact support');
      }
    });
}
}
});
