#ifndef _SAVESTATE_PROBE_H_
#define _SAVESTATE_PROBE_H_

#include <map>

#include "ChunkProbe.h"
#include "ChunkType.h"
#include "EmCommon.h"

class SavestateProbe {
   public:
    using chunkMapT = std::map<ChunkType, ChunkProbe>;
    using chunkT = ChunkProbe;

   public:
    SavestateProbe() = default;

    ChunkProbe* GetChunk(ChunkType type);

    const chunkMapT& GetChunkMap() const;

   private:
    chunkMapT chunkMap;
};

#endif  // _SAVESTATE_PROBE_H_
