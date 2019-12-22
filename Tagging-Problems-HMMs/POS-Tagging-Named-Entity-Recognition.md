# 词性标注和命名实体识别

本章讨论 NLP 中两种重要的标注问题，**词性标注（POS Tagging）**和**命名体识别（Named-Entity Recognition）**。



## 词性标注（POS Tagging）

用于词性标注的训练集包含一系列句子与它们对应的标注，如 [Penn Treebank](https://catalog.ldc.upenn.edu/LDC99T42) 数据集包含大概一百万个单词（40000 个句子）和其对应的标注。

词性标注一个主要难点是处理**歧义（ambiguity）**，因为同一个单词在不同语境下可能需要被划分为不同的词性。另一个难点是会有很多测试数据中的单词，在训练集中出现频率很低甚至没有出现。

在进行词性标注时，我们会考虑两种不同的信息来源。

1. 一个单词属于哪个词性有一定的 statistical preferences。如，*quarter* 这个词可以是名词也可以是动词，但是从统计学来说，它是一个名词的概率更大。
2. 上下文信息，一些标记序列出现的可能性更大。如，标记序列 $$(D \ N \ V)$$ 在英语中出现的概率非常大（如 $$the/D \ dog/N \ saw/N$$ ...），但是序列 $$(D \ V \ N)$$ 出现的概率就小很多了。

但是有时这两种信息来源是冲突的，如在句子 *The trash can is hard to find* 中，$$can$$ 的词性是名词，但在英语中 $$can$$ 更常见的用法是情态动词。在这个句子中，由于上下文的关系，$$can$$ 被标注成动词的倾向被覆盖了。



## 命名实体识别（Named-Entity Recognition）

命名实体识别中，输入是一个句子，输出是一个已经标记好了命名实体的句子。如：

<div align=center>
    <img src="img/named-entity-recognition.png" width="550"/>
</div>

假设有三种可能的实体类型：PERSON，LOCATION 和 COMPANY。则本例中模型认为 *Boeing Co.* 是 COMPANY，*Wall Street* 是 LOCATION，*Alan Mulally* 是 PERSON。

命名实体识别看起来似乎不是标注问题，因为它并没有没有对句子中的每个单词都进行标注。但把命名实体识别处理为标注问题是最方便的，如下图中，把不属于任何实体类型的单词标注为 NA，把表示 COMPANY 的词组的第一个单词标注为 SC，把表示 COMPANY 的词组的后几个单词标注为 CC：

<div align=center>
    <img src="img/named-entity-recognition-tagging-problem.png" width="550"/>
</div>