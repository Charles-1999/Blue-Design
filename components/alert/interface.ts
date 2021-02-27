export type Kind = 'info' | 'success' | 'error' | 'warning';
export type KindMap = Record<Kind, string>;

export interface AlertProps {
  /**
   * Set this to change alert kind
   * @default info
   */
  kind?: 'info' | 'success' | 'error' | 'warning';
}