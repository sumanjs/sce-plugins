import {SceEvent, SceMain} from "../../interfaces";



export class CodeGenerator implements SceMain {
  
  private rawCode = '';
  private styledCode = '';
  public static pluginName = 'nodejs-mocha';
  
  constructor(){
  
  }
  
  getRawGeneratedCode() {
    return this.rawCode;
  }
  
  
  getStyledGeneratedCode() {
    return this.styledCode;
  }
  
  onComplete(){
  
  }
  
  
  onNextEvent(ev: SceEvent) {
  
  }
  
 
  
}