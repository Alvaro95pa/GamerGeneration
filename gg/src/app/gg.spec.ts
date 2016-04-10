import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {GgApp} from '../app/gg';

beforeEachProviders(() => [GgApp]);

describe('App: Gg', () => {
  it('should have the `defaultMeaning` as 42', inject([GgApp], (app: GgApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([GgApp], (app: GgApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

