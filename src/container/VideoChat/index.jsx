// pages/videochat.js
"use client";
import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import styles from './index.module.css';

export default function VideoChat() {
  const localVideoRef = useRef(null);
  const remoteVideosRef = useRef(null);
  const chatAreaRef = useRef(null);
  const messageInputRef = useRef(null);
  const [candidates, setCandidates] = useState([]);
  const socketRef = useRef(null);
  const localStreamRef = useRef(null);
  const room = 'testRoom';

  useEffect(() => {
    // Socket.io 연결
    socketRef.current = io('http://43.203.31.163:3000', {
      transports: ['websocket'],
      upgrade: false,
    });

    // 미디어 스트림 설정
    const setupMediaStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        localStreamRef.current = stream;
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }

        socketRef.current.emit('joinRoom', { room });

        // Canvas 설정
        const video = localVideoRef.current;
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        if (video) {
          video.onloadedmetadata = () => {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
          };

          video.addEventListener('play', () => {
            const interval = 200;
            setInterval(() => {
              context.drawImage(video, 0, 0, canvas.width, canvas.height);
              canvas.toBlob((blob) => {
                if (blob) {
                  socketRef.current.emit('message', {
                    blob: blob,
                    candidateId: '20',
                  });
                }
              }, 'image/jpeg');
            }, interval);
          });
        }
      } catch (error) {
        console.error('Error accessing media devices.', error);
      }
    };

    setupMediaStream();

    // Socket 이벤트 핸들러
    socketRef.current.on('fromCV', (data) => {
      const uint8Array = new Uint8Array(data.data.blob);
      const base64String = btoa(String.fromCharCode.apply(null, uint8Array));
      const jpegDataUrl = `data:image/jpeg;base64,${base64String}`;

      setCandidates((prevCandidates) => {
        if (!prevCandidates.includes(data.data.candidateId)) {
          return [...prevCandidates, data.data.candidateId];
        }
        return prevCandidates;
      });

      const existingImage = document.getElementById(
        `candidate-${data.data.candidateId}`
      );
      
      if (!existingImage) {
        const newImage = document.createElement('img');
        newImage.setAttribute('id', `candidate-${data.data.candidateId}`);
        newImage.style.width = '320px';
        newImage.style.height = '240px';
        newImage.style.margin = '10px';
        newImage.style.border = '5px solid black';
        newImage.src = jpegDataUrl;
        remoteVideosRef.current?.appendChild(newImage);
      } else {
        existingImage.src = jpegDataUrl;
        existingImage.style.borderColor = data.data.alert === 1 ? 'RED' : 'BLACK';
      }
    });

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
      if (localStreamRef.current) {
        localStreamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div>
      <div className={styles.videos}>
        <div ref={remoteVideosRef} />
      </div>
    </div>
  );
}
