# 标注问题（Tagging Problems）和隐马尔科夫模型（Hidden Markov Models，HMMs）

**词性标注（Part-of-speech (POS) tagging）**是序列对建模的一种，目标是构建一个模型，输入为一个句子，如 $$the \ dog \ saw \ a \ cat$$；输出为一个标记序列（tag sequence）（也叫状态序列（state sequence）），如 $$D \ N \ V \ D \ N$$（这里 $$D$$ 为限定词， $$N$$ 为名词， $$V$$ 为动词）。

定义标注模型的输入为 $$x_1...x_n$$，如上例中 $$n=5$$，$$x_1 = the, x_2 = dog, x_3 = saw, x_4 = the, x_5 = cat$$；定义输出的序列为 $$y_1...y_n$$，如上例中 $$y_1 = D, y_2 = N, y_3 = V$$。

这种将源序列 $$x_1...x_n$$ 映射为标记序列 $$y_1...y_n$$ 的问题，被称为**序列标注问题（sequence labeling problem）**或**标注问题（tagging problem）**。

假设我们有训练集 $$(x^{(i)},y^{(i)}),i = 1...m$$，其中 $$x^{(i)}$$ 为句子 $$x_1^{(i)}...x_{n_i}^{(i)}$$， $$y^{(i)}$$ 为标记序列 $$y_1^{(i)}...y_{n_i}^{(i)}$$。即 $$x^{(i)}$$ 是第 $$i$$ 个训练句子的第 $$j$$ 个单词，$$y^{(i)}$$ 是它的标记。我们的任务是从训练集中学习出一个能把这些句子映射到标记序列的函数。



## Reference

- [Tagging Problems, and Hidden Markov Models (Notes) (Michael Collins, Columbia University)](http://www.cs.columbia.edu/~mcollins/hmms-spring2013.pdf)
- [Tagging Problems, and Hidden Markov Models (Slides) (Michael Collins, Columbia University)](http://www.cs.columbia.edu/~mcollins/cs4705-spring2019/slides/tagging.pdf)
- [The Noisy Channel Model and Markov Models (Mark Johnson, Macquarie University)](http://web.science.mq.edu.au/~mjohnson/papers/Johnson14-04LM-talk.pdf)

