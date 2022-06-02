
export class IMM {

  constructor(
    public Serial: number,
    public Maker: string,
    public Grade: string,
    public Machine_Type: string,
    public Screw_Diameter: number,
    public Injection_Pressure: number,
    public Screw_Stroke: number,
    public Injection_Rate: number,
    public Clamping_Force: number,
    public Shot_Weight: number,
    public Picture: ArrayBuffer|string|null=null,
  ) {  }

}