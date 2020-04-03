# 上下文无关文法（Context-Free Grammars，CFGs）



## Basic Definitions

一个**上下文无关文法（Context-Free Grammar，CFG）**是一个四元组 $$G=(N,\Sigma,R,S)$$，其中：

- $$N$$ 是由非终止符（non-terminal symbol）组成的有限集
- $$\Sigma$$ 是由终止符（terminal symbol）组成的有限集
- $$R$$ 是由规则 $$X_1 \rightarrow Y_1Y_2...Y_n$$ 组成的有限集，其中$$X \in N,n \geq 0, Y_i \in (N \cup \Sigma), i=1...n$$
- $$S \in N$$ 是一个起始符