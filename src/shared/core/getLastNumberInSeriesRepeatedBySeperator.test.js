import { describe, expect, it } from 'vitest';
import getLastNumberOfSeriesBySeperator from './getLastNumberInSeriesRepeatedBySeperator';

describe('Get last number of repeated numerical series by seperator', () => {
    it('length: 4, seperator: 2; (1) 1 => (2) 2 => (3) 1 => (4) 2; result: 2', () => {
        expect(getLastNumberOfSeriesBySeperator(4, 2)).toBe(2);
    });

    it('length: 6, seperator: 3; (1) 1 => (2) 2 => (3) 3 => (4) 1 => (5) 2 => (6) 3; result: 3', () => {
        expect(getLastNumberOfSeriesBySeperator(6, 3)).toBe(3);
    })
})