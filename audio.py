import pygame
import time

def play_audio(file_path):
    """Play an audio file using pygame"""
    # Initialize the mixer module
    pygame.mixer.init()
    
    # Load the audio file
    pygame.mixer.music.load(file_path)
    
    # Start playing the audio
    pygame.mixer.music.play()
    
    # Wait until the audio is finished playing
    while pygame.mixer.music.get_busy():
        time.sleep(1)

if __name__ == "__main__":
    # Path to the audio file
    audio_file = 'car.mp4'  # Replace with the path to your audio file
    
    # Play the audio file
    play_audio(audio_file)

# from pytube import YouTube


# yt = YouTube("https://youtu.be/cWMxCE2HTag?si=GDB6-3hbHjOhaNPE")
# stream = yt.streams.filter(progressive=True, file_extension='mp4').first()
# print('stream')


# if stream:
#     print(f"Now playing: {yt.title}")
#     # play_song(stream.url)  # Play the video stream
# else:
#     print(f"No playable stream found for: {yt.title}")