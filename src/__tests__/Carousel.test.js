/**
 * @jest-environment jsdom
 */
 import React from 'react';
 import { fireEvent, cleanup, render, screen} from '@testing-library/react';
 
 afterEach(cleanup);
 
 function sum(a, b) {
     return a + b;
 }
 
 test('adds 1 + 2 to equal 3', () => {
   expect(sum(1, 2)).toBe(3);
 });
