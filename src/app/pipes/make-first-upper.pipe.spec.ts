import { MakeFirstUpperPipe } from './make-first-upper.pipe';

describe('MakeFirstUpperPipe', () => {
  it('create an instance', () => {
    const pipe = new MakeFirstUpperPipe();
    expect(pipe).toBeTruthy();
  });
});
