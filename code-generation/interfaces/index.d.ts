
export interface SceEvent {

}

export interface SceMain {
  
  initialize: () => void;
  
  onComplete: () => void;
  
  onNextEvent: (ev: SceEvent) => void;
  
  getRawGeneratedCode: () => string;
  
  getStyledGeneratedCode: () => string;
  
}


