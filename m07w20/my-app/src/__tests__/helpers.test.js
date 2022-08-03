import { announceResult } from '../helpers';

describe('announceResult function', () => {
  let fakeState;
  
  beforeEach(() => {
    fakeState = {
      compSelection: null,
      playerSelection: null,
      status: 'Waiting',
      cheating: false
    }
  })
  
  it('returns Won if playerSelection is Axe and compSelection is Tree', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Tree'
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
  })
  
  it('returns Lost if playerSelection is Tree and compSelection is Axe', () => {
    fakeState.playerSelection = 'Tree';
    fakeState.compSelection = 'Axe'
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
  })
  
  it('returns Tied if playerSelection is Axe and compSelection is Axe', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Axe'
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied');
  })
  
  it('returns Waiting if nothing has been selected yet', () => {
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Waiting');
  })
})
