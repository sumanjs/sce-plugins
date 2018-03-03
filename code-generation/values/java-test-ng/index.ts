import {SceEvent, SceMain, Updateable} from "sce-plugin-typings";

export class SCEPlugin implements SceMain {
  
  private rawCode = '';
  private styledCode = '';
  public static pluginType = 'code-generator';
  public static pluginName = 'java-test-ng';
  
  constructor(){
  
  }
  
  initialize(){
  
  }
  
  getRawGeneratedCode() {
    // return this.rawCode;
    return 'gnarnia (java testng)';
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