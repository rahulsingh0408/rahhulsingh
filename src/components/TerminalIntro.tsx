import { useState, useEffect, useRef } from 'react';

interface TerminalIntroProps {
  onComplete: () => void;
}

const TerminalIntro = ({ onComplete }: TerminalIntroProps) => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const terminalLines = [
    { text: '> Initializing AI Portfolio System...', delay: 0 },
    { text: '> Loading neural network modules...', delay: 600 },
    { text: '> Connecting to data streams...', delay: 1200 },
    { text: '> Parsing experience vectors...', delay: 1800 },
    { text: '> Calibrating skill matrices...', delay: 2400 },
    { text: '> System ready.', delay: 3000 },
    { text: '> Welcome, User.', delay: 3600 },
  ];

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    terminalLines.forEach((line, index) => {
      const t = setTimeout(() => {
        setLines(prev => [...prev, line.text]);
        setCurrentLine(index + 1);
      }, line.delay);
      timers.push(t);
    });

    const completeTimer = setTimeout(() => {
      setIsComplete(true);
      const callbackTimer = setTimeout(() => {
        onCompleteRef.current();
      }, 800);
      timers.push(callbackTimer);
    }, 4500);
    timers.push(completeTimer);

    // ✅ Cleanup: cancel all timers if component unmounts (e.g. Strict Mode double-invoke)
    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 bg-background flex items-center justify-center transition-opacity duration-1000 ${
        isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 right-0 h-[2px] bg-neon-cyan/30 animate-scan" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/[0.02] to-transparent pointer-events-none" />
      <div className="w-full max-w-3xl mx-4 p-8 glass rounded-xl neon-border">
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
          <div className="w-3 h-3 rounded-full bg-destructive" />
          <div className="w-3 h-3 rounded-full bg-neon-amber" />
          <div className="w-3 h-3 rounded-full bg-neon-green" />
          <span className="ml-4 font-mono text-sm text-muted-foreground">
            rahul@portfolio:~
          </span>
        </div>
        <div className="font-mono text-sm md:text-base space-y-2 min-h-[200px]">
          {lines.map((line, index) => (
            <div
              key={index}
              className={`${
                line.includes('System ready') || line.includes('Welcome')
                  ? 'neon-text'
                  : 'text-foreground'
              } animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {line}
            </div>
          ))}
          {currentLine < terminalLines.length && (
            <span className="terminal-cursor" />
          )}
        </div>
        <div className="mt-6 pt-4 border-t border-border">
          <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
            <span>NEURAL_CORE v2.0.26</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              CONNECTED
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalIntro;
