export interface SceEvent {

}

export interface Updateable {
  updateCode: () => any;
}

export interface SceMain {
  
  initialize: () => void;
  
  onComplete: (x: Updateable) => void;
  
  onNextEvent: (ev: SceEvent, x: Updateable) => void;
  
  getRawGeneratedCode: () => string;
  
  getStyledGeneratedCode: () => string;
  
}


