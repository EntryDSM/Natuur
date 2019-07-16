export function actionPressEnter(
  { key }: React.KeyboardEvent<HTMLInputElement>,
  handleEvent: () => void
) {
  if (key === "Enter") {
    handleEvent();
  }
}
