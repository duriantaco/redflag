export interface FlagOption {
    text: string;
    weightage: number;
  }

export interface Flag {
    mainText: string;
    type: 'simple' | 'expandable';
    options?: FlagOption[];
    weightage?: number;
    isSelected: boolean;
    selectedOption: number | null;
  }
  
  export interface Flags {
    [key: string]: Flag;
  }
  
  export interface SavedFlag {
    name: string;
    isRedFlag: boolean;
    flags: Flags;
  }

