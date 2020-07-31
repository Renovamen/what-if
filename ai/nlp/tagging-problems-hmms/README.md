---
catagory: NLP
readme: true
---

# 标注问题和隐马尔科夫模型

**标注问题（tagging problem）**（或**序列标注问题（sequence labeling problem）**）是将源序列 $$x_1...x_n$$（标注模型的输入）映射到标记序列 $$y_1...y_n$$（标注模型的输出）的问题。

假设我们有训练集 $$(x^{(i)},y^{(i)}),i = 1...m$$，其中 $$x^{(i)}$$ 为句子 $$x_1^{(i)}...x_{n_i}^{(i)}$$， $$y^{(i)}$$ 为标签序列 $$y_1^{(i)}...y_{n_i}^{(i)}$$。即 $$x^{(i)}_j$$ 是第 $$i$$ 个训练句子的第 $$j$$ 个单词，$$y^{(i)}$$ 是它的标签。那么标注问题就是从该训练集中学习出一个能把这些句子映射到其标签序列的函数。



## 参考

1. [**Tagging Problems, and Hidden Markov Models (Notes)**. *Michael Collins*. Columbia University.](http://www.cs.columbia.edu/~mcollins/hmms-spring2013.pdf)
2. [**Tagging Problems, and Hidden Markov Models (Slides)**. *Michael Collins*. Columbia University.](http://www.cs.columbia.edu/~mcollins/cs4705-spring2019/slides/tagging.pdf)
3. [**The Noisy Channel Model and Markov Models**. *Mark Johnson*. Macquarie University.](http://web.science.mq.edu.au/~mjohnson/papers/Johnson14-04LM-talk.pdf)
4. [**Natural Language Processing for Online Applications: Text Retrieval, Extraction and Categorization**](https://doc.lagout.org/science/Artificial%20Intelligence/Natural%20Language%20Processing/Natural%20Language%20Processing%20for%20Online%20Applications%20Text%20Retrieval%2CExtraction%20and%20Categorization%20-%20Peter%20Jackson%20%2C%20Isabelle%20Moulinier.pdf)
