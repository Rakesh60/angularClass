import { MyCapPipe } from './my-cap.pipe';

describe('MyCapPipe', () => {
  it('create an instance', () => {
    const pipe = new MyCapPipe();
    expect(pipe).toBeTruthy();
  });
});
