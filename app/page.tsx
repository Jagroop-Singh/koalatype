import TypingGame from './TypingGame';
import KeyboardDisplay from './KeyboardDisplay.tsx';
import Header from './Header';

export default function Home() {
  return (
    <main className='w-full'>
      <Header />
      <TypingGame />
      <KeyboardDisplay />
    </main>
  );
}
