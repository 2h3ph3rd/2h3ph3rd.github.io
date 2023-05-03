# 📮 Proxy

## Burp

### Main modules

- Proxy: intercept requests and responses that can be analyzed and manipulated.
- Intruder: automate requests for fuzzing or bruteforcing.
- Repeater: execute multiple times the same requests with a powerful editor.
- Sequencer: measure the entropy of token strings.
- Decoder: encode, decode, or hash data.
- Comparer: find difference between two requests.
- Extender: extend Burp features adding plugins from the BApp Store or your disk.

### Intruder

Four modes of operation:

- Sniper: given one set of payload, each entry is tested in each position in turn.
- Battering ram: given one set of payload, each entry is tested in all the positions in the same turn.
- Pithfork: different payloads for each position, tested all at once.
- Cluster bomb: different payloads for each entry, all possible combinations are tested.

Considering 3 positions and 100 entries for the payload:

| mode          | number            | notes                                    |
| ------------- | ----------------- | ---------------------------------------- |
| sniper        | 3 \* 100          | test one parameter at a time             |
| battering ram | 100               | same entry in each position              |
| pithfork      | 100               | different entries in different positions |
| cluster bomb  | 100 \* 100 \* 100 | all possible combinations                |
