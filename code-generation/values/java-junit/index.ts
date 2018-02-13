import {SceEvent, SceMain} from "../../interfaces";



export class JavaJUnitGenerator implements SceMain {
  
  rawCode = '';
  styledCode = '';
  
  constructor(){
  
  }
  
  getRawGeneratedCode() {
    return this.rawCode;
  }
  
  
  getStyledGeneratedCode() {
    return this.styledCode;
  }
  
  
  onNextEvent(ev: SceEvent) {
  
  }
  
 
  
}