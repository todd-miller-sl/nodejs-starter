const { isDevelopment, isProduction } = require('./utils');

describe('utils#isDevelopment', () => {
  it('should exist', () => {
    isDevelopment.should.be.Function();
    isDevelopment.length.should.equal(0);
  });

  it('should return false if current environment is production or staging', () => {
    process.env.NODE_ENV = 'production';
    isDevelopment().should.be.false();

    process.env.NODE_ENV = 'staging';
    isDevelopment().should.be.false();
  });

  it('should return true if current environment is not production nor staging', () => {
    process.env.NODE_ENV = 'development';
    isDevelopment().should.be.true();

    process.env.NODE_ENV = 'testing';
    isDevelopment().should.be.true();

    process.env.NODE_ENV = 'random_environment';
    isDevelopment().should.be.true();
  });
});

describe('utils#isProduction', () => {
  it('should exist', () => {
    isProduction.should.be.Function();
    isProduction.length.should.equal(0);
  });

  it('should return true if current environment is production or staging', () => {
    process.env.NODE_ENV = 'production';
    isProduction().should.be.true();

    process.env.NODE_ENV = 'staging';
    isProduction().should.be.true();
  });

  it('should return false if current environment is not production nor staging', () => {
    process.env.NODE_ENV = 'development';
    isProduction().should.be.false();

    process.env.NODE_ENV = 'testing';
    isProduction().should.be.false();

    process.env.NODE_ENV = 'random_environment';
    isProduction().should.be.false();
  });
});
