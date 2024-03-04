export enum RepaymentStatus {
  confirmed = 'confirmed',
  pending = 'pending',
  disputed = 'disputed',
  decline = 'declined',
}

export const RepaymentStatusArray =[
    RepaymentStatus.confirmed,
    RepaymentStatus.pending,
    RepaymentStatus.decline,
    RepaymentStatus.disputed
]