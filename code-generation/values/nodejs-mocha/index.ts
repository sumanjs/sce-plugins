import {SceEvent, SceMain, Updateable} from "sce-plugin-typings";


export class CodeGenerator implements SceMain {
  
  private rawCode = '';
  private styledCode = '';
  public static pluginName = 'nodejs-mocha';
  public code = [] as any;
  
  constructor(){
  
  }
  
  initialize(){
  
  }
  
  getRawGeneratedCode() {
    // return this.rawCode;
    
    return 'poodles (nodejs-mocha) ' + this.code.join(' ');
  }
  
  
  getStyledGeneratedCode() {
    return this.styledCode;
  }
  
  onComplete(x: Updateable){
    this.code.push('complete');
    x.updateCode();
  }
  
  onNextEvent(ev: SceEvent, x: Updateable) {
  
    this.code.push(this.code.length);
    x.updateCode();
  }
  
 
  
}