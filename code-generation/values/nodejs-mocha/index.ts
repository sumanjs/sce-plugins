import {SceEvent, SceMain, Updateable} from "../../interfaces";



export class CodeGenerator implements SceMain {
  
  private rawCode = '';
  private styledCode = '';
  public static pluginName = 'nodejs-mocha';
  
  constructor(){
  
  }
  
  initialize(){
  
  }
  
  getRawGeneratedCode() {
    // return this.rawCode;
    
    return 'poodles (nodejs-mocha)';
  }
  
  
  getStyledGeneratedCode() {
    return this.styledCode;
  }
  
  onComplete(){
  
  }
  
  
  onNextEvent(ev: SceEvent, x: Updateable) {
  
    x.updateCode();
  }
  
 
  
}