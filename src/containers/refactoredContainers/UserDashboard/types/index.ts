export interface INotificationInfo {
  data: {
    title: string,
    date: string,
    message: string,
  }
}

export interface IWorkFlowProps {
  currentUserConsumer?: boolean;
}
