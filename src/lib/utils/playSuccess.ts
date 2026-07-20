export const playSuccess = () => {
  const audio = new Audio('/assets/audio/google-wallet-payment-successful.mp3')
  audio.play()
  .catch((err) => {
    console.error('Error playing success sound:', err)
  })
};