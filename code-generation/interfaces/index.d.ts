
export interface SceEvent {

}

export interface SceMain {
  
  onComplete: () => void;
  
  onNextEvent: (ev: SceEvent) => void;
  
  getRawGeneratedCode: () => string;
  
  getStyledGeneratedCode: () => string;
  
}


