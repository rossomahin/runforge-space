import {mockRuns} from './runs'
import type { Run } from '../types'

export async function fetchRuns(): Promise<Run[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockRuns);
    }, 1000);
  });
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     reject(new Error('Network error'));
  //   }, 1000);
  // });
}