
export interface SceEvent {

}

export interface SceMain {
  
  onNextEvent: (ev: SceEvent) => void;
  
  getRawGeneratedCode: () => string;
  
  getStyledGeneratedCode: () => string;
  
  
  
}


