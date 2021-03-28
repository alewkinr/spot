package ru.ad.astra.travel.back.service;

import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class RandomEmojiService {

    private List<String> эмодзи = Arrays.asList(
            "🤟",
            "💩",
            "👋",
            "🦁",
            "🐍",
            "🦎",
            "🦀",
            "🦞",
            "🦑",
            "🐳",
            "🐋",
            "🦈",
            "🌞",
            "🌝",
            "💥",
            "⚡",
            "✨",
            "🌟",
            "🌈",
            "🍾",
            "🥢",
            "🥡",
            "🍶",
            "🥂",
            "🍵",
            "⛳",
            "️🧘",
            "‍♂",
            "️🤾",
            "🤾‍",
            "♂",
            "️🏄",
            "‍♀",
            "️🎸",
            "🎰",
            "🎯",
            "🗺",
            "🛶",
            "🛴",
            "🚂",
            "🚈",
            "🚞",
            "🛸",
            "⛲",
            "️🗽",
            "🏰",
            "🏯",
            "🏬",
            "🏢",
            "🏗",
            "🕍",
            "🕌",
            "🎑",
            "🌆",
            "🎆",
            "📠",
            "🎙",
            "⌛",
            "️🕳",
            "🔬",
            "🔭",
            "🦠",
            "🎉",
            "🎊",
            "🎎",
            "🏮",
            "🎐",
            "🎏"
    );

    public String getRandom() {
        return эмодзи.get(случайноеЧисло(0, эмодзи.size()));
    }

    public int случайноеЧисло(int min, int max) {
        return (int) ((Math.random() * (max - min)) + min);
    }
}
