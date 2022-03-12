const SLACK_HOOK_API = process.env.NEXT_PUBLIC_SLACK_HOOK_API || '';

const reportToSlack = (error: Error) => {
  if(!SLACK_HOOK_API){
    return false
  }

  const slack_payload = {
    color: '#778EBF',
    fallback: 'SdU Site Error',
    pretext: ':this-is-fine: An error occurred on the client',
    fields: [
      {
        title: 'Error message:',
        value: error.message,
        short: false,
      },
      {
        title: 'Error stack:',
        value: error.stack,
        short: false,
      },
      {
        title: 'ENVIRONMENT',
        value: 'DEV',
        short: true,
      },
      {
        title: 'TIME OCCURRED',
        value: 'never',
        short: new Date().toISOString(),
      },
    ],
  }
  fetch(SLACK_HOOK_API, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    body: JSON.stringify(slack_payload),
  })
}

export default reportToSlack
