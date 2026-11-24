# Rechnet der Reihe nach alle Reels, die noch kein reel.mp4 haben. Bricht nach der Zeitvorgabe ab und macht beim nächsten Aufruf weiter.
#   python3 werkzeug/alle.py [sekunden, Standard 540]
import sys, os, subprocess, time, glob
K = os.path.dirname(os.path.dirname(os.path.abspath(__file__))); zeit = float(sys.argv[1]) if len(sys.argv) > 1 else 540; t0 = time.time()
offen = [o for o in sorted(glob.glob(K + "/reels/*/")) if not os.path.exists(o + "reel.mp4")]
for o in offen:
    rest = zeit - (time.time() - t0)
    if rest < 20: break
    if subprocess.run(["python3", K + "/werkzeug/reel.py", o.rstrip("/"), "--zeit", str(rest)]).returncode == 3: break
print("offen:", len([o for o in glob.glob(K + "/reels/*/") if not os.path.exists(o + "reel.mp4")]))
