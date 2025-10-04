import { helpers } from '@vuelidate/validators';

const iranianMobile = helpers.withParams({ type: 'iranianMobile' }, (value) => {
  if (!helpers.req(value)) {
    return true;
  }
  return /^09[0-9]{9}$/.test(value);
});

const iranianPostalCode = helpers.withParams({ type: 'iranianPostalCode' }, (value) => {
  if (!helpers.req(value)) {
    return true;
  }
  return /^[0-9]{10}$/.test(value);
});

export {
  iranianMobile,
  iranianPostalCode,
};
